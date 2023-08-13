import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { RiCodeSSlashFill, RiCodeBoxFill } from 'react-icons/ri'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover svg {
    transform: rotate(15deg);
    transition: transform 0.3s ease;
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
          <RiCodeSSlashFill />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={1}
          >
            Paulo Monezi
          </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
