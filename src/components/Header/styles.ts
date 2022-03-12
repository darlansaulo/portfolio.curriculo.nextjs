import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

    ul {
        display: flex;
        gap: 2rem;
        align-items: center;
    }
`;

export const NavLinkContainer = styled.li`
    > button {
        font-size: 1rem;
        border-style: none;
        background-color: ${({ theme }) => theme.background};
        text-transform: uppercase;
        color: ${({ theme })  => theme.primary};
        transition: 0.5s;

        &:hover {
            color: ${({ theme }) => lighten(0.7, theme.textHighlight)}
        }
    }
`;