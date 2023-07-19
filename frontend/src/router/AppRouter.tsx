import App from '@/App';
import { PATH } from '@constants/path';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import TripEditPage from '@pages/TripEditPage/TripEditPage';
import TripEditPageSkeleton from '@pages/TripEditPage/TripEditPageSkeleton';
import TripsPage from '@pages/TripsPage/TripsPage';
import TripsPageSkeleton from '@pages/TripsPage/TripsPageSkeleton';

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
    children: [
      {
        path: PATH.TRIPS,
        element: (
          <Suspense fallback={<TripsPageSkeleton />}>
            <TripsPage />
          </Suspense>
        ),
      },
      {
        path: PATH.EDIT_TRIP,
        element: (
          <Suspense fallback={<TripEditPageSkeleton />}>
            <TripEditPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
