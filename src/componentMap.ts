import {BlockType} from './models';
import {
    Section,
    Text,
    Container,
    Header,
    HeaderWithImage,
    Button,
    Title,
    Divider,
    Features,
    Tabs,
    Share,
    Link,
    Table,
    ImageBlock,
    Scrollable,
    Tiles,
    Event,
    Partner,
    PriceDetailed,
    MediaCard,
} from './components';

import {
    BannerBlock,
    CompaniesBlock,
    SimpleBlock,
    MediaBlock,
    PreviewBlock,
    InfoBlock,
    SecurityBlock,
    SliderBlock,
    ExtendedFeaturesBlock,
    PromoFeaturesBlock,
    QuestionsBlock,
    TableBlock,
    TabsBlock,
    TextTableBlock,
    LinkTableBlock,
} from './blocks';
import TutorialCard from './components/TutorialCard/TutorialCard';

const components = {
    [BlockType.Section]: Section,
    [BlockType.Text]: Text,
    [BlockType.Container]: Container,
    [BlockType.Header]: Header,
    [BlockType.HeaderWithImage]: HeaderWithImage,
    [BlockType.Button]: Button,
    [BlockType.Title]: Title,
    [BlockType.Divider]: Divider,
    [BlockType.Features]: Features,
    [BlockType.Tabs]: Tabs,
    [BlockType.Share]: Share,
    [BlockType.Link]: Link,
    [BlockType.Table]: Table,
    [BlockType.Image]: ImageBlock,
    [BlockType.Scrollable]: Scrollable,
    [BlockType.Tiles]: Tiles,
    [BlockType.Event]: Event,
    [BlockType.TutorialCard]: TutorialCard,
    [BlockType.Partner]: Partner,
    [BlockType.PriceDetailed]: PriceDetailed,
    [BlockType.MediaCard]: MediaCard,
    [BlockType.BannerCard]: BannerBlock,

    // Blocks
    [BlockType.SliderBlock]: SliderBlock,
    [BlockType.SimpleBlock]: SimpleBlock,
    [BlockType.ExtendedFeaturesBlock]: ExtendedFeaturesBlock,
    [BlockType.PromoFeaturesBlock]: PromoFeaturesBlock,
    [BlockType.QuestionsBlock]: QuestionsBlock,
    [BlockType.BannerBlock]: BannerBlock,
    [BlockType.CompaniesBlock]: CompaniesBlock,
    [BlockType.MediaBlock]: MediaBlock,
    [BlockType.PreviewBlock]: PreviewBlock,
    [BlockType.InfoBlock]: InfoBlock,
    [BlockType.SecurityBlock]: SecurityBlock,
    [BlockType.TableBlock]: TableBlock,
    [BlockType.TabsBlock]: TabsBlock,
    [BlockType.TextTableBlock]: TextTableBlock,
    [BlockType.LinkTableBlock]: LinkTableBlock,
};

export default components;
