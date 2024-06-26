import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
    return (
        <Container>
            <Header showButtonBack />
            <Content>
                <Icon />

                <Highlight
                    title="Nova turma"
                    subtitle="Cria a turma para adicionar as pessoas"
                />

                <Button
                    title="Criar"
                />
            </Content>
        </Container>
    )
}