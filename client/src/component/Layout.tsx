// Components
import { FC } from 'react';
import { Layout } from 'antd';


type Props = {
    children: React.ReactNode;
};

export const MainLayout: FC<Props> = (props) => {
    return (
        <Layout className = 'layout'>
            <Layout.Content style = { { padding: '0 50px', width:'1000px' } }>
                { props.children }
            </Layout.Content>
        </Layout>
    );
};
