import { fetchGraphQL } from '@app/lib/helpers/api';
import projectDescriptionQuery from '@app/lib/queries/Projects.query';
import { ProjectsProps } from './Projects.interface';
import ProjectsComponent from './Projects.client';

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
  const descriptions = await getProjects(
    props.projectsCollection.items.map((item) => item.sys.id)
  );

  const data = {
    ...props,
    projectsCollection: {
      items: props.projectsCollection.items.map((project, index) => ({
        ...project,
        description: descriptions[index].description
      }))
    }
  };

  return <ProjectsComponent {...data} />;
}
