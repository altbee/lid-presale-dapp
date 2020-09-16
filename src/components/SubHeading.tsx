import React from 'react';
import { Text, Box, Flex, Grid, Image, Link } from '@chakra-ui/core';
import { shortEther, toBN, toWei, formatAssetUrl } from 'utils';

import imgETHLogo from 'assets/images/common/ethereum-eth-logo.png';
import imgETHLogoWhite from 'assets/images/common/ethereum-eth-logo-white.png';
import imgLidLogo from 'assets/images/common/logo-lid.png';
import imgDepositor from 'assets/images/common/depositor.png';
import { DappMetaData } from 'types';

import styled from "styled-components";

interface ISubHeading {
  totalEth: string;
  maxShares: string;
  stakingLid: string;
  totalDepositors: string;
  accountEthDeposit: string;
  accountShares: string;
  meta: DappMetaData;
}

const SubHeadings: React.FC<ISubHeading> = ({
  totalEth,
  totalDepositors,
  accountEthDeposit,
  accountShares,
  maxShares,
  stakingLid,
  meta
}) => {
  const { addresses } = meta;


  const BoxOutline = styled.div`

  width: 100%;
  border: 1px solid #E4E4E4;
  border-radius: 5px;
  padding: 25px;

  background-color: ${props => props.color};
  background: ${props => props.color};

`
  const WhiteBox = {
    titleColor: "lid.fgMed",
    contentColor: "lid.brand",
    background: "#fff"
  }

  const BlueBox = {
    titleColor: "lid.bg",
    contentColor: "lid.bg",
    background: "linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%)"
  }

  const SubHeadingData = [
    {
      id: 1,
      styles: BlueBox,
      title: "Your ETH Deposits",
      content: shortEther(accountEthDeposit),
      image: imgETHLogoWhite,
    },
    {
      id: 2,
      styles: BlueBox,
      title: "Your CXN Tokens",
      content: getMetaTokens(),
      image: formatAssetUrl(meta.tokenName, 'logo.png'),
    },
    {
      id: 2,
      styles: WhiteBox,
      title: "Total Presale Depositors",
      content: totalDepositors,
      image: imgDepositor,
    },
    {
      id: 3,
      styles: WhiteBox,
      title: "Total ETH Deposited",
      content: shortEther(totalEth),
      image: imgETHLogo,
    },
    {
      id: 4,
      styles: WhiteBox,
      title: "Total Presale " + meta.tokenName,
      content: shortEther(toWei(meta.totalPresale)),
      image: formatAssetUrl(meta.tokenName, 'logo.png'),
    },
    {
      id: 5,
      styles: WhiteBox,
      title: "Your Staking Lid Tokens",
      content: shortEther(stakingLid),
      image: imgLidLogo,
    }
  ]

  function getMetaTokens () {
    return ( maxShares !== '0'
    ? shortEther(
        toBN(accountShares)
          .mul(toBN(toWei(meta.totalPresale)))
          .div(toBN(maxShares))
          .toString()
      )
    : '0');
  }

  return (
    <Box
      w="100%"
      m="0"
      p={['20px', '20px', '0px']}
      pt="0px"
      pb="20px"
      bg="lid.bgMed"
      position="relative"
    >
      <Box
        position="absolute"
        zIndex={1}
        left="0px"
        right="0px"
        bottom="0px"
        height="100px"
        bg="lid.bg"
      />
      <Flex
        w="100%"
        maxW="1200px"
        align="center"
        ml="auto"
        mr="auto"
        p="0px"
        pt="20px"
        pb="20px"
        position="relative"
        zIndex={2}
      >
        <Grid
          w="100%"
          gap="20px"
          templateRows={['repeat(6, 1fr)', 'repeat(2, max-content)']}
          templateColumns={['auto', 'repeat(3, minmax(0, 1fr))']}
        >

        <BoxOutline color="#fff">
            <Text fontSize="18px" m="0" p="0" color="lid.fgMed">
              {`Verified ${meta.tokenName} Presale Contract`}
            </Text>
            {addresses.presale ? (
              <Link
                wordBreak="break-word"
                color="lid.brand"
                href={'https://etherscan.io/address/' + addresses.presale}
                mt="15px"
                display="block"
              >
                {addresses.presale}
              </Link>
            ) : (
              <Text>TBD</Text>
            )}
        </BoxOutline>

        {SubHeadingData.map(data =>
          <BoxOutline color={data.styles.background}>
            <Image
              src={data.image}
              alt="eth logo"
              w="auto"
              h="25px"
              display="inline-block"
              position="relative"
              top="-3px"
            />
            <Text ml="10px" mt="5px" color={data.styles.titleColor} display="inline-block">
              {data.title}
            </Text>
            <Text fontSize="38px" w="100%" color={data.styles.contentColor} fontWeight="bold">
              {data.content}
            </Text>
          </BoxOutline>
        )}
        </Grid>
      </Flex>
    </Box>
  );
};

export default SubHeadings;
