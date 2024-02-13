// app/page.tsx
'use client'
import { Link, Text } from '@chakra-ui/react';

export default function Page() {
  return (
    <>
      <Link href='/login' color='blue.400' _hover={{ color: 'blue.500' }}>
        login
      </Link>
      <Text as="h1" fontSize="xl">This is h1</Text>
      <Text as="h2" fontSize="lg">This is h2</Text>
      <Text as="h3">This is h3</Text>
    </>
  );
}
