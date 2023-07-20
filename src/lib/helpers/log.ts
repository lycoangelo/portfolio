/* eslint-disable no-console */
// Check if the current environment is lower (dev or qa) based on the CONTENTFUL_ENVIRONMENT environment variable
export const isLowerEnvironment = ['dev', 'qa'].includes(
  process.env.CONTENTFUL_ENVIRONMENT || ''
);

// Define log colors for different log types
export const logColors = {
  error: '\x1b[31m', // Red color for error logs
  reset: '\x1b[0m', // Reset color to default
  success: '\x1b[32m', // Green color for success logs
  warning: '\x1b[33m' // Yellow color for warning logs
};

// Logs a warning for components that are missing in the componentMap.ts file but were requested in the API
export const logComponentMapMissingComponents = (name: string) =>
  console.log(
    `${logColors.warning}WARNING: "${name}" has not been added to componentMap.ts yet.${logColors.reset}`
  );
