"use client";

import Button from "@app/components/atoms/Button/Button";
import Input from "@app/components/atoms/Input/Input";
import RichText from "@app/components/atoms/RichText/RichText";
import SectionHeader from "@app/components/molecules/SectionHeader/SectionHeader";
import TimeOdometer from "@app/components/molecules/TimeOdometer/TimeOdometer";
import iconMap, { IconType } from "@app/lib/constants/iconMap";
import { CONTACT_FORM_ID } from "@app/lib/constants/selectors";
import { validateEmail } from "@app/lib/helpers/validation";
import useToggleClassInView from "@app/lib/hooks/useToggleAnchorClass";
import va from "@vercel/analytics";
import { useRef, useState } from "react";

import {
  ContactFormProps,
  ContactRequest,
  ContactResponse
} from "./ContactForm.interface";
import styles from "./ContactForm.styles";

export default function ContactForm({
  consent,
  contactsCollection,
  name,
  title
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);

  const sectionRef = useToggleClassInView(CONTACT_FORM_ID, "text-white");

  const validateForm = () => {
    const email = emailRef.current?.value;

    const payload: ContactRequest = {
      name: nameRef.current?.value,
      email,
      subject: subjectRef.current?.value,
      message: messageRef.current?.value
    };

    const isValid =
      !Object.values(payload).some(
        (value) => value === null || value === undefined || value === ""
      ) && validateEmail(email);

    return { isValid, payload };
  };

  const sendContactRequest = async (
    request: ContactRequest
  ): Promise<ContactResponse> => {
    const response = await fetch(
      `/contact/${request.email}/${request.subject}/${
        request.name
      }/${request.message?.replaceAll("?", "<question-mark>")}/contact-request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to send contact request: ${response.statusText}`);
    }

    return await response.json();
  };

  const submitForm = async () => {
    const { isValid, payload } = validateForm();

    if (isValid) {
      try {
        await sendContactRequest(payload);
        setIsSuccess(true);
        va.track("Contact Form submitted successfully");
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        va.track("Contact Form submitted failed");
      }
    }

    !isSubmitted && setIsSubmitted(true);
  };

  const fields = [
    { label: "Name", ref: nameRef },
    { label: "Email", ref: emailRef, type: "email" },
    { label: "Subject", ref: subjectRef },
    { label: "Message", ref: messageRef, type: "textarea" }
  ];

  return (
    <section className={styles.container} id={CONTACT_FORM_ID} ref={sectionRef}>
      <div className={styles.timeWrapper}>
        <span className={styles.timeLabel}>My Local Time:</span>
        <TimeOdometer className={styles.time} />
      </div>
      <SectionHeader
        className={styles.header}
        layout="right"
        name={name}
        title={title}
      />
      <div className={styles.contacts}>
        {contactsCollection.items.map((contact, index) => {
          const contactKey = contact.name.toLowerCase();

          const hrefMap: { [key: string]: string } = {
            email: `mailto:${contact.contact}`,
            github: contact.contact,
            linkedin: contact.contact,
            location: contact.contact,
            mobile: `tel:${contact.contact}`,
            upwork: contact.contact
          };

          const Icon = iconMap[contactKey] as IconType;

          return (
            <a
              className={styles.contact}
              href={hrefMap[contactKey]}
              key={index}
              onClick={() => va.track(`Clicked "${contact.label}" link`)}
              rel="noreferrer"
              target="_blank"
            >
              <span className={styles.iconWrapper}>
                {Icon && <Icon className={styles.icon} />}
              </span>
              {contact.label}
            </a>
          );
        })}
      </div>

      {isSuccess ? (
        <h3 className={styles.submittedMsg}>Thanks for swinging by!</h3>
      ) : (
        <form className={styles.form} onSubmit={submitForm}>
          {fields.map(({ label, ref, type }) => (
            <Input
              className={styles.input(type === "textarea")}
              key={label}
              label={label}
              ref={ref}
              isSubmitted={isSubmitted}
              onFocus={() => va.track(`Clicked "${label}" field`)}
              type={type}
            />
          ))}
          <RichText className={styles.consent} contentBody={consent} />
          <Button
            className={styles.submit}
            hasBorderEffect
            onClick={submitForm}
          >
            Submit
          </Button>
        </form>
      )}
    </section>
  );
}
