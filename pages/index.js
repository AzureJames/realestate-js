import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
  <Flex backgroundColor="lightgreen" flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner"></Image>
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
        <Text fontSize="lg" paddingTop="3" color="gray.700" paddingBottom="3" fontWeight="bold">{desc1}<br/>{desc2}</Text>
        <Button fontSize="2xl" padding="7" borderRadius="5">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
  </Flex> //ctrl c then y to close then npm run dev restart
)

export default function Home({propertiesForSale, propertiesForRent}) {
  //console.log(propertiesForSale, propertiesForRent);
  return (
    <div>
      <h1>Homes Available</h1>
      <Box>
        <Banner 
          purpose="RENT A HOME"
          title1="Rental Properties for"
          title2="Everyone"
          desc1="Explore apartments, villas, and homes"
          desc2="and more"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        />

        <Flex flexWrap="wrap">
          {propertiesForRent.map((property) => <Property property={property} key={property.id}/>)}
        </Flex>

        <Banner 
          purpose="BUY A HOME"
          title1="Find and Purchase a "
          title2="Dream Home"
          desc1="Explore apartments, land, builder floors"
          desc2="ranches and more"
          buttonText="Explore Buying"
          linkName="/search?purpose=for-sale"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        />



        <Flex flexWrap="wrap">
          {propertiesForSale.map((property) => <Property property={property} key={property.id}/>)}
        </Flex>
      </Box>
    </div>
  )
}

export async function getStaticProps() {  // input? {propertiesForSale, propertiesForRent}
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  console.log(propertyForRent);
  console.log(propertyForSale);
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

