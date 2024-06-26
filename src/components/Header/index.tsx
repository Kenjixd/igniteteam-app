import { Container, Logo, IconBack, ButtonBack } from './styles';

import logoImg from '@assets/logo.png';

type Props = {
    showButtonBack?: boolean;
}

export function Header({ showButtonBack = false }: Props) {
    return (
        <Container>
            {showButtonBack &&
                <ButtonBack>
                    <IconBack />
                </ButtonBack>
            }
            <Logo source={logoImg} />
        </Container>
    )
}