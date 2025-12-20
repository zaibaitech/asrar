import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

// Dynamically import Swagger UI to avoid SSR issues
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

const ApiDocsPage: NextPage = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SwaggerUI url="/openapi.json" />
    </div>
  );
};

export default ApiDocsPage;
