import getEnvValues from "../envs";


export default function Business({URI, PRIVATE_KEY }: {URI: string; PRIVATE_KEY: string }) { 
  return (
      <div>
        Business Page {URI}
        <div>Some multi line</div>
        {PRIVATE_KEY}
      </div>
    );
  }


  export  const getStaticProps = getEnvValues;
  
  