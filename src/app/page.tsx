'use client';

import { useEffect, useState } from 'react';
import SuperheroList from './components/list/SuperheroList';
import { Superhero } from './models/Superhero';
import Pagination from './components/pagination/Pagination';
import SuperheroResolvers from '@/graphql/resolvers';
import { withAuth } from '../../authMiddleware';

const ITEMS_PER_PAGE = 10;

function Home() {

  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [currentToken, setToken] = useState(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(superheroes.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function getListSuperheroes(nextToken = null) {
      const response = await SuperheroResolvers.Query.getListSuperheroes(ITEMS_PER_PAGE, nextToken);
      setSuperheroes(response.data.listSuperheroes);
      setToken(response.data.listSuperheroes.nextToken);
    }

    if (currentPage >= 1) {
      getListSuperheroes();
    }
  }, [currentPage]);

  if(!superheroes) {
    return <div>Loading superheroes...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Superheroes</h1>
      <SuperheroList superheroes={superheroes} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default withAuth(Home);
