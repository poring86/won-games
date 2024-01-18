'use client'

import { Email, Lock } from '@styled-icons/material-outlined'
import * as S from './styles'
import TextField from 'components/TextField'
import Button from 'components/Button'
import Link from 'next/link'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <S.FormLink>
        Don’t have an account?{' '}
        <Link href="/sign-up" legacyBehavior>
          <a>Sign up</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
