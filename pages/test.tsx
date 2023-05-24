import getEnvValues from "../envs";


export default function Business({URI}: {URI: string }) { 
  return (
      <div>
        Business Page {URI}
      </div>
    );
  }


  export  const getStaticProps = getEnvValues;
  
  