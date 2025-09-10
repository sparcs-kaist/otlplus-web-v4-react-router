import FlexWrapper from "@/common/components/FlexWrapper"
import Typography from "@/common/components/Typography"
import { useTranslation } from "react-i18next"

const Credits: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FlexWrapper direction="column" gap={12} align={"center"} justify={"center"}>
      <Typography color={"Text.placeholder"} type={"Bigger"}>OTL PLUS</Typography>
      <FlexWrapper direction="row" gap={12} justify={"space-between"}>
        <Typography color={"Text.placeholder"} type={"Big"}>{t('credits.credits')}</Typography>
        <Typography color={"Text.placeholder"} type={"Big"}>|</Typography>
        <Typography color={"Text.placeholder"} type={"Big"}>{t('credits.license')}</Typography>
        <Typography color={"Text.placeholder"} type={"Big"}>|</Typography>
        <Typography color={"Text.placeholder"} type={"Big"}>{t('credits.privacyPolicy')}</Typography>
      </FlexWrapper>
      <Typography color={"Text.placeholder"} type={"Big"}>otlplus@sparcs.org</Typography>
      <Typography color={"Text.placeholder"} type={"Big"}>Ⓒ 2016, SPARCS OTL TEAM</Typography>
    </FlexWrapper>
  );
}

export default Credits;
