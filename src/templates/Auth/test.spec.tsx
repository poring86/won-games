import { screen } from '@testing-library/react'

import Auth from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Auth />', () => {
  it('should render logo, title, children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    // verificar se tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // verificar se tem o heading principal
    expect(
      screen.getByRole('heading', {
        name: /Seus jogos favoritos em um só lugar/i
      })
    ).toBeInTheDocument()

    // verificar se tem o subtitle
    expect(
      screen.getByText(/é a melhor e mais completa plataforma de games./i)
    ).toBeInTheDocument()

    // verificar se tem o title do content
    expect(screen.getByText(/Auth title/i)).toBeInTheDocument()

    // verificar se o children está sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
