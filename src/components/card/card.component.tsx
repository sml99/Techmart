import './card.styles.scss';
import { Product } from '../../routes/Home';
import { Box, Image, Badge, ButtonGroup, IconButton } from '@chakra-ui/react';
import Favorite from '../../assets/favorite.svg';
import Cart from '../../assets/shopping-bag.svg';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart.context';
import { useFavs } from '../../context/favorite.context';

interface Props {
    product: Product;
    oneProduct?: boolean;
    miniCart?: boolean;
}

const Card = (props: Props) => {
    const { isAdded, addItem, removeItem } = useCart();
    const { isAdded: isFavAdd, addItem: addFavs, removeItem: removeFavs } = useFavs();
    const { product, oneProduct } = props;
    const fullPage = oneProduct ?? false;
    const addToCart = () => {
        if (isAdded(product.id)) removeItem(product.id);
        else addItem(product.id);
    };

    const addToFavs = () => {
        if (isFavAdd(product.id)) removeFavs(product.id);
        else addFavs(product.id);
    };

    const navigate = useNavigate();
    const goToProduct = () => {
        navigate('/product/' + product.id);
    };

    return (
        <div className={fullPage ? 'full-card' : 'mini-card'}>
            <Box
                className="card"
                // maxH="md"
                // maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="xs"
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
                            className={isFavAdd(product.id) ? 'active' : ''}
                            onClick={addToFavs}
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
                <div onClick={goToProduct} className="img-container">
                    <Image
                        className="thumbnail"
                        src={fullPage ? product.images[0] : product.thumbnail}
                        alt={product.description}
                    />
                </div>

                <Box p="6">
                    <Box
                        width="90%"
                        display="flex"
                        alignItems="baseline"
                        justifyContent={!fullPage ? 'right' : ''}
                        position={!fullPage ? 'absolute' : 'relative'}
                    >
                        <Badge fontSize="lg" borderRadius="full" colorScheme="teal">
                            {product.price + ' $'}
                        </Badge>
                        {fullPage && (
                            <>
                                <Box
                                    width="100%"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="right"
                                    color="gray.500"
                                    fontWeight="bold"
                                    letterSpacing="wide"
                                    fontSize="xl"
                                    textTransform="uppercase"
                                    ml="2"
                                >
                                    📦{product.stock} &bull;
                                </Box>
                                <Box display="flex" mt="2" alignItems="center">
                                    <Box as="span" ml="2" color="gray.600" fontSize="xl">
                                        ⭐{product.rating}
                                    </Box>
                                </Box>
                            </>
                        )}
                    </Box>

                    <Box mt="1" w="85%" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1} fontSize="lg">
                        {product.title}
                    </Box>
                    {fullPage && (
                        <div className="desc-container">
                            <Box className="description" noOfLines={4}>
                                {!fullPage ? product.description.substring(0, 60) + '...' : product.description}
                                <Box as="span" color="gray.600" fontSize="sm">
                                    {/* / wk */}
                                </Box>
                            </Box>
                        </div>
                    )}
                </Box>
            </Box>
        </div>
    );

    // return (
    //     <GridItem w="100%" h="10" bg="blue.500">
    //         {product.title}
    //     </GridItem>
    // );
};

export default Card;
