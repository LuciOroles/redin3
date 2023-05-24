
export default function Business({data}: {data: {URI: string}}) { 
  return (
      <div>
        Business Page {data.URI}
      </div>
    );
  }
  
  export async function getServerSideProps() {
    
    return {
      props: {
        data: {
          URI: process.env.MONGO_URI
        }
      }
    }
  }
  