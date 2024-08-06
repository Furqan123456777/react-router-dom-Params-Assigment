import React from 'react';
import Cards from './Cards';
import { produceData } from "./Data";

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        {
            produceData.map((e, i) => {
                return (
                    <div style={{display:"inline-block" , height:300}} key={i}>
                        <Cards  
                            id={e.id}
                            title={e.title}
                            description={e.description}
                            image={e.image}
                        />
                    </div>
                );
            })
        }
    </div>
  );
};

export default Home;
