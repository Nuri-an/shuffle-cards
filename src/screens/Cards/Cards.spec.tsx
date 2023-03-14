import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'src/utils/functions/tests';
import Cards from '.';

window.scrollTo = jest.fn();

describe('Cards Screen', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render a initial component', async () => {
    renderWithProviders(<Cards />);
    const cards = screen.getByTestId('div-cards');
    const cardsHeader = screen.getByTestId('header');
    const cardsContainer = screen.getByTestId('container-cards');
    const cardsContainerButtons = screen.getByTestId('container-buttons');
    const cardsButton = screen.getAllByTestId('button');
    const cardsContent = screen.getByTestId('content-cards');

    expect(cards).toBeInTheDocument();
    expect(cardsHeader).toBeInTheDocument();
    expect(cardsContainer).toBeInTheDocument();
    expect(cardsContainerButtons).toBeInTheDocument();
    expect(cardsButton).toHaveLength(2);
    expect(cardsContent).toBeInTheDocument();
  });

  it('should render 5 card components first', async () => {
    renderWithProviders(<Cards />);

    expect(await screen.findAllByTestId('box-card')).toHaveLength(5);
  });

  it('should render the add card button', () => {
    renderWithProviders(<Cards />);
    const cardsAddButton = screen.getByText('Puxar mais uma carta');

    expect(cardsAddButton).toBeInTheDocument();
  });

  it('should add 1 new card when add button was clicked', async () => {
    renderWithProviders(<Cards />);

    expect(await screen.findAllByTestId('box-card')).toHaveLength(5);

    const cardsAddButton = screen.getAllByTestId('button');
    await userEvent.click(cardsAddButton[0]);

    expect(await screen.findAllByTestId('box-card')).toHaveLength(6);
  });

  it('should add 2 new card when add button was clicked', async () => {
    renderWithProviders(<Cards />);

    expect(await screen.findAllByTestId('box-card')).toHaveLength(5);

    const cardsAddButton = screen.getAllByTestId('button');
    await userEvent.click(cardsAddButton[0]);
    await userEvent.click(cardsAddButton[0]);

    expect(await screen.findAllByTestId('box-card')).toHaveLength(7);
  });

  it('should add 3 new card when add button was clicked', async () => {
    renderWithProviders(<Cards />);

    waitFor(() => {
      const cardsBoxCard = screen.getAllByTestId('box-card');
      expect(cardsBoxCard).toHaveLength(5);
    });

    const cardsAddButton = screen.getByText('Puxar mais uma carta');
    await userEvent.click(cardsAddButton);
    await userEvent.click(cardsAddButton);
    await userEvent.click(cardsAddButton);

    waitFor(() => {
      const cardsBoxCard = screen.getAllByTestId('box-card');
      expect(cardsBoxCard).toHaveLength(8);
    });
  });

  it('should not add new card when add button was clicked more then 3 times', async () => {
    renderWithProviders(<Cards />);

    waitFor(() => {
      const cardsBoxCard = screen.getAllByTestId('box-card');
      expect(cardsBoxCard).toHaveLength(5);
    });

    const cardsAddButton = screen.getByText('Puxar mais uma carta');
    await userEvent.tripleClick(cardsAddButton);

    waitFor(() => {
      const cardsBoxCard = screen.getAllByTestId('box-card');
      expect(cardsBoxCard).toHaveLength(8);
    });

    await userEvent.click(cardsAddButton);
    waitFor(() => {
      const cardsBoxCard = screen.getAllByTestId('box-card');
      expect(cardsBoxCard).toHaveLength(8);
    });
  });

  it("should be disable the add button when it's clicked 3 times", async () => {
    renderWithProviders(<Cards />);
    const cardsAddButton = screen.getByText('Puxar mais uma carta');
    await userEvent.tripleClick(cardsAddButton);

    waitFor(() => {
      expect(cardsAddButton).toBeDisabled();
    });
  });

  it('should be shuffle cards when shuffle button was clicked', async () => {
    renderWithProviders(<Cards />);

    const cardsBoxCardBefore: HTMLDivElement[] = await screen.findAllByTestId(
      'box-card',
    );
    expect(cardsBoxCardBefore).toHaveLength(5);
    const idsCardBefore = cardsBoxCardBefore.map((card) => card.id);

    const cardsShuffleButton = screen.getAllByTestId('button');
    await userEvent.click(cardsShuffleButton[1]);

    const cardsBoxCardAfter = await screen.findAllByTestId('box-card');
    expect(cardsBoxCardAfter).toHaveLength(5);
    const idsCardAfter = cardsBoxCardAfter.map((card) => card.id);

    expect(idsCardBefore.toString()).not.toBe(idsCardAfter.toString());
  });
});
