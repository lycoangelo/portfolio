export interface EssayEssayProps {
  essay: {
    json: any;
  };
}

export interface EssayProps extends EssayEssayProps {
  __typename: string;
  name: string;
  title: string;
}
