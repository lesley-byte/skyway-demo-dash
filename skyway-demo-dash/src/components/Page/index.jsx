import { useEffect } from 'react';
import PageContent from '../PageContent';

import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <h1>Page</h1>
      <h2>{capitalizeFirstLetter(currentPage)} Page Page </h2>

      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}
export default Page;
