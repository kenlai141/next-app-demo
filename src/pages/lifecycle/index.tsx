import React, { useEffect, useMemo } from 'react';

const Index = (props: any) => {
  console.log('in component 1');

  useEffect(() => {
    console.log('in useEffect');
  });

  const m = useMemo(() => {
    console.log('in useMemo');
    return 1;
  }, []);

  console.log('in component 2');

  return <div>{typeof m}</div>;
};

export default Index;
