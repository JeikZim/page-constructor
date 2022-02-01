import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {BlockType, TabsBlockModel} from '../../../models';
import Tabs from '../Tabs';
import {PageConstructor} from '../../../containers/PageConstructor/PageConstructor';

export default {
    title: 'Компоненты/Tabs',
    component: Tabs,
} as Meta;

const DefaultTemplate: Story<TabsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

const MediaTemplate: Story<TabsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
export const Media = MediaTemplate.bind({});

Default.args = {
    type: BlockType.TabsBlock,
    title: {
        text: 'Решения по отраслям',
    },
    items: [
        {
            tabName: 'Розничная торговля',
            title: 'Розничная торговля',
            text: ' * Сократите время выхода на рынок\n * Сократите время выхода на рынок',
            link: {
                url: '#contact-form',
                text: 'Рассчитать стоимость',
                theme: 'normal',
                arrow: true,
            },
        },
        {
            tabName: 'Сайт объявлений',
            title: 'Сайт объявлений',
            text: 'Настройте и разверните инфраструктуру в один клик, чтобы получить необходимые ресурсы для разработки, тестирования и запуска своего приложения в production-среде.',
            link: {
                url: '#contact-form',
                text: 'Рассчитать стоимость',
                theme: 'normal',
            },
        },
    ],
};

Media.args = {
    type: BlockType.TabsBlock,
    title: {
        text: 'Решения по отраслям',
    },
    items: [
        {
            tabName: 'Розничная торговля',
            title: 'Розничная торговля',
            image: 'https://storage.cloud-preprod.yandex.net/berdysheva-test/ydb-assets/graph.png',
            caption: 'GitOps Release Strategy',
            text: ' * Сократите время выхода на рынок\n * Сократите время выхода на рынок',
        },
        {
            tabName: 'Сайт объявлений',
            title: 'Сайт объявлений',
            image: 'https://storage.yandexcloud.net/cloud-www-assets/solutions/schemes/data-platform.png',
            caption: 'Платформа данных в Yandex.Cloud',
            text: 'Настройте и разверните инфраструктуру в один клик, чтобы получить необходимые ресурсы для разработки, тестирования и запуска своего приложения в production-среде.',
        },
    ],
};