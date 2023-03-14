import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'src/utils/functions/tests';
import Card from '.';

describe('Card Component', () => {
  const defaulImage =
    'https://opencollective-production.s3.us-west-1.amazonaws.com/97017710-a90f-11e9-b6fb-2bbe7128f780.png';
  const defaultProfile = 'https://opencollective.com/opensource';

  it('should render a component', () => {
    renderWithTheme(
      <Card
        value={1}
        image={defaulImage}
        description=""
        title=""
        profileUrl={defaultProfile}
      />,
    );
    const card = screen.getByTestId('card');
    const cardValue = screen.getByTestId('card-value');
    const cardImage = screen.getByTestId('card-img');
    const cardTitle = screen.getByTestId('card-title');
    const cardLink = screen.getByTestId('card-container-link');
    const cardProfileLogo = screen.getByTestId('card-profile-logo');
    const cardDescription = screen.getByTestId('card-description');

    expect(card).toBeInTheDocument();
    expect(cardValue).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(cardLink).toBeInTheDocument();
    expect(cardProfileLogo).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
  });

  it('should be formatted card value', async () => {
    renderWithTheme(
      <Card
        value={1}
        image={defaulImage}
        description=""
        title=""
        profileUrl={defaultProfile}
      />,
    );

    const cardValue = screen.getByText('01');
    expect(cardValue).toBeInTheDocument();
  });

  it('should be allow click in link', async () => {
    renderWithTheme(
      <Card
        value={1}
        image={defaulImage}
        description=""
        title=""
        profileUrl={defaultProfile}
      />,
    );
    const cardLink = screen.getByTestId('card-container-link');

    await userEvent.click(cardLink);
    expect(getComputedStyle(cardLink).pointerEvents).toBe('');
  });

  it('should render a default image when empty prop', async () => {
    renderWithTheme(
      <Card
        value={1}
        image=""
        description=""
        title=""
        profileUrl={defaultProfile}
      />,
    );
    const cardImage = screen.getByTestId('card-img') as HTMLImageElement;

    expect(cardImage.src).toBe(defaulImage);
  });

  it('should render a default image when wrong prop', async () => {
    renderWithTheme(
      <Card
        value={1}
        image="123456"
        description=""
        title=""
        profileUrl={defaultProfile}
      />,
    );
    const cardImage = screen.getByTestId('card-img') as HTMLImageElement;

    expect(cardImage.src).toBe(defaulImage);
  });

  it("should not be allow link click if isn't link", async () => {
    renderWithTheme(
      <Card
        value={1}
        image={defaulImage}
        description=""
        title=""
        profileUrl=""
      />,
    );
    const cardLink = screen.getByTestId('card-container-link');

    expect(getComputedStyle(cardLink).pointerEvents).toBe('none');
  });
});
