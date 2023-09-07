interface SkillProps {
  logo: {
    title: string;
    url: string;
  };
  level: string;
  name: string;
}

interface SkillsListProps {
  name: string;
  skillsCollection: {
    items: SkillProps[];
  };
}

export interface SkillSetListProps {
  name: string;
  title: string;
  listCollection: {
    items: SkillsListProps[];
  };
}
