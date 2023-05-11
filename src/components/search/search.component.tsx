import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useProduct } from '../../context/products.context';

const handleClick = () => console.log('Search');
const handleChange = (text: string, setSearch: any) => {
    setSearch(text);
};

const Search = () => {
    const { setSearch } = useProduct();
    return (
        <div className="search">
            <InputGroup size="md">
                <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Search"
                    onChange={(event) => handleChange(event.target.value?.toLocaleLowerCase(), setSearch)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        <SearchIcon />
                    </Button>
                </InputRightElement>
            </InputGroup>
        </div>
    );
};

export default Search;
