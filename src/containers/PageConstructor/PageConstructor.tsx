import React, {useContext, useMemo} from 'react';
import _ from 'lodash';

import {
    Block,
    ShouldRenderBlock,
    HeaderBlockTypes,
    CustomConfig,
    PageContent,
    CustomItems,
    BlockTypes,
} from '../../models';
import {blockMap, subBlockMap} from '../../constructor-items';
import {Grid} from '../../grid';
import BackgroundMedia from '../../components/BackgroundMedia/BackgroundMedia';
import {
    block as cnBlock,
    getCustomBlockTypes,
    getCustomHeaderTypes,
    getThemedValue,
    getCustomItems,
} from '../../utils';
import {AnimateContext} from '../../context/animateContext';
import {InnerContext} from '../../context/innerContext';
import {ThemeValueContext} from '../../context/theme/ThemeValueContext';
import {ConstructorRow} from './components/ConstructorRow';
import {ConstructorFootnotes} from './components/ConstructorFootnotes';
import {ConstructorHeader} from './components/ConstructorItem';
import {ConstructorBlocks} from './components/ConstructorBlocks';
import Header from '../../components/navigation/components/Header/Header';
import {NavigationData} from '../../models/navigation';

import '@doc-tools/transform/dist/js/yfm';

import './PageConstructor.scss';

const b = cnBlock('page-constructor');

export type ItemMap = typeof blockMap & typeof subBlockMap & CustomItems;

export interface PageConstructorProps {
    content?: PageContent;
    shouldRenderBlock?: ShouldRenderBlock;
    custom?: CustomConfig;
    renderMenu?: () => React.ReactNode;
    navigationData?: NavigationData;
}

export const Constructor = (props: PageConstructorProps) => {
    const {context, headerBlockTypes} = useMemo(
        () => ({
            context: {
                blockTypes: [...BlockTypes, ...getCustomBlockTypes(props.custom)],
                itemMap: {
                    ...blockMap,
                    ...subBlockMap,
                    ...getCustomItems(props.custom),
                },
                loadables: props?.custom?.loadable,
            },
            headerBlockTypes: [...HeaderBlockTypes, ...getCustomHeaderTypes(props.custom)],
        }),
        [props.custom],
    );

    const {themeValue: theme} = useContext(ThemeValueContext);
    const {
        content: {blocks = [], background = {}, footnotes = []} = {},
        renderMenu,
        shouldRenderBlock,
        navigationData,
    } = props;

    const hasFootnotes = footnotes.length > 0;
    const isHeaderBlock = (block: Block) => headerBlockTypes.includes(block.type);
    const header = blocks?.find(isHeaderBlock);
    const restBlocks = blocks?.filter((block) => !isHeaderBlock(block));
    const themedBackground = getThemedValue(background, theme);

    return (
        <InnerContext.Provider value={context}>
            <div className={b()}>
                <div className={b('wrapper')}>
                    {themedBackground && (
                        <BackgroundMedia {...themedBackground} className={b('background')} />
                    )}
                    {navigationData?.header && (
                        <Header logo={navigationData?.logo} data={navigationData?.header} />
                    )}
                    {renderMenu && renderMenu()}
                    {header && <ConstructorHeader data={header} />}
                    <Grid>
                        {restBlocks && (
                            <ConstructorRow>
                                <ConstructorBlocks
                                    items={restBlocks}
                                    shouldRenderBlock={shouldRenderBlock}
                                />
                            </ConstructorRow>
                        )}
                        {hasFootnotes && (
                            <ConstructorRow>
                                <ConstructorFootnotes items={footnotes} />
                            </ConstructorRow>
                        )}
                    </Grid>
                </div>
            </div>
        </InnerContext.Provider>
    );
};

export const PageConstructor = (props: PageConstructorProps) => {
    const {content: {animated = true} = {}, ...rest} = props;

    return (
        <AnimateContext.Provider value={{animated}}>
            <Constructor content={props.content} {...rest} />
        </AnimateContext.Provider>
    );
};
