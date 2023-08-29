'use client';

import SectionHeader from '@app/components/molecules/SectionHeader/SectionHeader';
import iconMap, { IconType } from '@app/lib/constants/iconMap';
import styles from './ContactForm.styles';
import Button from '@app/components/atoms/Button/Button';
import Input from '@app/components/atoms/Input/Input';
import TimeOdometer from '@app/components/molecules/TimeOdometer/TimeOdometer';
import { CONTACT_FORM } from '@app/lib/constants/selectors';
import { useRef, useState } from 'react';

import {
  ContactFormProps,
  ContactRequest,
  ContactResponse
} from './ContactForm.interface';
import useToggleClassInView from '@app/lib/hooks/useToggleAnchorClass';
import { validateEmail } from '@app/lib/helpers/validation';

export default function ContactForm({
  name,
  title,
  contactsCollection
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);

  const sectionRef = useToggleClassInView(CONTACT_FORM);

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
        (value) => value === null || value === undefined || value === ''
      ) && validateEmail(email);

    return { isValid, payload };
  };

  const sendContactRequest = async (
    request: ContactRequest
  ): Promise<ContactResponse> => {
    const response = await fetch(
      `/contact/${request.email}/${request.subject}/${
        request.name
      }/${request.message?.replaceAll('?', '<question-mark>')}/contact-request`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }

    !isSubmitted && setIsSubmitted(true);
  };

  const fields = [
    { label: 'Name', ref: nameRef },
    { label: 'Email', ref: emailRef, type: 'email' },
    { label: 'Subject', ref: subjectRef },
    { label: 'Message', ref: messageRef, type: 'textarea' }
  ];

  return (
    <section className={styles.container} id={CONTACT_FORM} ref={sectionRef}>
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
            mobile: `tel:${contact.contact}`,
            location: contact.contact,
            upwork: contact.contact,
            linkedin: contact.contact
          };

          const Icon = iconMap[contactKey] as IconType;

          return (
            <a
              className={styles.contact}
              href={hrefMap[contactKey]}
              key={index}
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
              className={styles.input(type === 'textarea')}
              key={label}
              label={label}
              ref={ref}
              isSubmitted={isSubmitted}
              type={type}
            />
          ))}
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
