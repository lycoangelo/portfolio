import { fetchGraphQL } from '@app/lib/helpers/api';
import projectDescriptionQuery from '@app/lib/queries/Projects.query';

import ProjectsComponent from './Projects';
import { ProjectsProps } from './Projects.interface';

const getProjects = (ids: string[]) =>
  Promise.all(
    ids.map((id) =>
      fetchGraphQL(projectDescriptionQuery, false, {
        id
      })
        .then((res) => res.json())
        .then(({ data }) => ({ ...data.project }))
        .catch(() => null)
    )
  );

export default async function Projects(props: ProjectsProps) {
  const responses = await getProjects(
    props.projectsCollection.items.map((item) => item.sys.id)
  );

  const data = {
    ...props,
    projectsCollection: {
      items: props.projectsCollection.items.map((project, index) => ({
        ...project,
        description: responses[index]?.description,
        technologies: responses[index]?.technologies
      }))
    }
  };

  return <ProjectsComponent {...data} />;
}
