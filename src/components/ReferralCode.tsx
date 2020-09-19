import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Text, Box, Button, Grid } from '@chakra-ui/core';
import { shortEther } from 'utils';

import styled from "styled-components";

const BoxOutLineExample = styled.div`

  width: 100%;
  border: 1px solid #E4E4E4;
  border-radius: 5px;
  padding: 25px;
  background-color: ##fff;

  h2 {
    font-size: 38px;
    with: 100%;
    font-weight: bold;
    color: black;
  }

  p {
    font-size: 18px;
    margin: 0;
    padding: 0;
    color: #5B5B5B;
  }

`

interface IReferralCode {
  address: string;
  earnedReferrals: string;
  referralCounts: string;
}

const ReferralCode: React.FC<IReferralCode> = ({
  address,
  earnedReferrals,
  referralCounts
}) => {
  const siteUrl = window.location.href;

  return (
    <Box
      w="100%"
      maxWidth="1200px"
      ml="auto"
      mr="auto"
      mt="60px"
      mb="60px"
      px={['20px', '20px', 0]}
    >
      <Box
        textAlign="left"
        border="solid 1px"
        borderRadius="5px"
        borderColor="lid.stroke"
        bg="white"
        display="block"
        w="100%"
        mb="20px"
        p="20px"
      >
        <CopyToClipboard text={`${siteUrl}/#/${address}`}>
          <Button
            display="block"
            color="lid.fgLight"
            bg="lid.buttonBg"
            borderRadius="25px"
            h="50px"
            w="140px"
            float="right"
            mt="25px"
          >
            Copy
          </Button>
        </CopyToClipboard>
        <Text fontSize="36px" color="lid.fg" width="100%">
          Referral Code
        </Text>
        <Text color="lid.brand" mt="10px" mb="10px">
          2.5% rewards when anyone uses to deposit
        </Text>
        <Text
          wordBreak="break-word"
          p="15px"
          pl="25px"
          color="lid.fgMed"
          border="solid 1px"
          borderColor="lid.stroke"
          borderRadius="28px"
          w="100%"
        >
          {`${siteUrl}/#/${address}`}
        </Text>
      </Box>
      
      <Grid
        w="100%"
        gap="20px"
        mb="40px"
        templateRows={['repeat(2, 1fr)', 'max-content']}
        templateColumns={['auto', 'repeat(2, minmax(0, 1fr))']}
      >
        <BoxOutLineExample>
            <p> Account number of referrals </p>
            <h2> {referralCounts} </h2>
        </BoxOutLineExample>

        <BoxOutLineExample>
            <p> Referral Eth Earned </p>
            <h2> {shortEther(earnedReferrals)} </h2>
        </BoxOutLineExample>

      </Grid>
    </Box>
  );
};

export default ReferralCode;
