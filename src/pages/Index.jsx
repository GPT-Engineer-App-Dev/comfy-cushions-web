import { Container, Text, VStack, Box, Image, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const cushions = [
  {
    id: 1,
    name: "Comfy Cushion",
    description: "A very comfortable cushion for your sofa.",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1541616138747-f4a42c7f0668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21meSUyMGN1c2hpb258ZW58MHx8fHwxNzE2NzU1ODczfDA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: 2,
    name: "Elegant Cushion",
    description: "An elegant cushion to enhance your living room.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1512291313931-d4291048e7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY3VzaGlvbnxlbnwwfHx8fDE3MTY3NTU4NzN8MA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: 3,
    name: "Outdoor Cushion",
    description: "A durable cushion perfect for outdoor use.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1635887986726-e3f9fe272860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY3VzaGlvbnxlbnwwfHx8fDE3MTY3NTU4NzN8MA&ixlib=rb-4.0.3&q=80&w=1080"
  }
];

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">Cushion Store</Text>
        <Text fontSize="xl">Find the perfect cushion for your home</Text>
        <VStack spacing={6} width="100%">
          {cushions.map(cushion => (
            <Box key={cushion.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" maxW="md">
              <Image src={cushion.image} alt={cushion.name} />
              <Box p={6}>
                <Text fontSize="2xl" fontWeight="bold">{cushion.name}</Text>
                <Text mt={2}>{cushion.description}</Text>
                <HStack justifyContent="space-between" mt={4}>
                  <Text fontSize="xl" fontWeight="bold">{cushion.price}</Text>
                  <IconButton aria-label="Add to cart" icon={<FaShoppingCart />} size="lg" colorScheme="teal" />
                </HStack>
              </Box>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;