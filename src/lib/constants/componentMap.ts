import PersonalDetails from '@app/components/PersonalDetails/PersonalDetails';

interface ComponentMapKey {
  [key: string]: (props: any) => JSX.Element;
}

// Define the component map object
const componentMap: ComponentMapKey = {
  PersonalDetails
};

// Export the component map object
export default componentMap;
