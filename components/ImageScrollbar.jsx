import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex} from '@chakra-ui/react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Flex justify="center" alignItems="center" marginRight="1">
            <Icon as={FaArrowAltCircleLeft} onClick={() => scrollPrev()} fontSize="2xl" cursor="pointer"/>
        </Flex>
    );
}



const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justify="center" alignItems="center" marginRight="1">
            <Icon as={FaArrowAltCircleRight} onClick={() => scrollNext()} fontSize="2xl" cursor="pointer" d={['none','none','none','block']}/>
        </Flex>
    );
}

const ImageScrollbar = ({data}) => {
    return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
        {data.map((item) =>(
            <Box width="910px" key={item.id} itemID={item.id} overflow="hidden" p="1">
                <Image src={item.url} width={1000} alt={item.id} height={500} 
                sizes="(max-width:500px) 100px, (max:width):1023px 400px, 1000px" blurDataURL={item.url} placeholder="blur"/>
            </Box>
        ))}
    </ScrollMenu>
    );   
}

export default ImageScrollbar;