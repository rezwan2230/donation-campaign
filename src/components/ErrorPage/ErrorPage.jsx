import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex justify-center items-center h-[100vh] text-4xl font-semibold'>
            <h2>404!! Page Not Found</h2>
            <p>{error.statusTest || error.message}</p>
        </div>
    );
};

export default ErrorPage;