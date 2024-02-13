// src/app/auth/login/page.tsx
'use client'
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react';
import { login, isLoginResponse } from '../../api/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await login(email, password);
  
    if (isLoginResponse(response)) {
      toast({
        title: 'Login Success',
        description: 'You have successfully logged in.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      // 成功後のリダイレクトや追加の処理
    } else {
      toast({
        title: 'Login Failed',
        description: response.message || 'Unknown error occurred.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box minH="100vh" d="flex" alignItems="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
