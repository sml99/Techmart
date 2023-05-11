import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
const handleClick = () => console.log('Search');

const Search = () => {
    return (
        <div className="search">
            <InputGroup size="md">
                <Input pr="4.5rem" type="text" placeholder="Search" />
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
