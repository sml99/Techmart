import './card.styles.scss';
import { useEffect } from 'react';
import { Product } from '../../routes/home/Home';
import { Box, Image, Badge, ButtonGroup, IconButton } from '@chakra-ui/react';
import Favorite from '../../assets/favorite.svg';
import Cart from '../../assets/shopping-bag.svg';
import { Outlet, Link } from 'react-router-dom';

interface Props {
    product: Product;
    isAdded: (id: number) => boolean;
    addItem: (id: number) => void;
    removeItem: (id: number) => void;
}

const Card = (props: Props) => {
    const { product, isAdded, addItem, removeItem } = props;
    const showInfo = false;

    const addToCart = () => {
        if (isAdded(product.id)) removeItem(product.id);
        else addItem(product.id);
    };

    return (
        <Box
            className="card"
            maxH="md"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="xs"
            // onClick={addToCart}
        >
            <Box className="float-buttons-container" mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                <ButtonGroup
                    className="float-buttons"
                    size="md"
                    marginTop="4px"
                    isAttached
                    variant="outline"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <IconButton
                        // className="active"
                        padding="2px"
                        aria-label="Add to favorites"
                        icon={<img src={Favorite} alt="favorite" />}
                    />
                    <IconButton
                        className={isAdded(product.id) ? 'active' : ''}
                        onClick={addToCart}
                        aria-label="Add to cart"
                        icon={<img src={Cart} alt="cart" />}
                    />
                </ButtonGroup>
            </Box>
            <div className="img-container">
                <Image className="thumbnail" src={product.thumbnail} alt={product.description} />
            </div>

            <Box p="6">
                <Box
                    width="90%"
                    display="flex"
                    alignItems="baseline"
                    justifyContent={!showInfo && 'right'}
                    position={!showInfo && 'absolute'}
                >
                    <Badge fontSize={showInfo ? 'sm' : 'lg'} borderRadius="full" px="3" colorScheme="teal">
                        {product.price + ' $'}
                    </Badge>
                    {showInfo && (
                        <>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                                📦{product.stock} &bull;
                            </Box>
                            <Box display="flex" mt="2" alignItems="center">
                                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                                    ⭐{product.rating}
                                </Box>
                            </Box>{' '}
                        </>
                    )}
                </Box>

                <Box
                    mt="1"
                    w="85%"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    fontSize={!showInfo && 'md'}
                >
                    {product.title}
                </Box>
                {showInfo && (
                    <Box>
                        {product.description.substring(0, 60) + '...'}
                        <Box as="span" color="gray.600" fontSize="sm">
                            {/* / wk */}
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );

    // return (
    //     <GridItem w="100%" h="10" bg="blue.500">
    //         {product.title}
    //     </GridItem>
    // );
};

export default Card;
