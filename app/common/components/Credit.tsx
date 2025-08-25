import FlexWrapper from "@/common/components/FlexWrapper"
import Typography from "@/common/components/Typography"

const Credit: React.FC = () => {
  return (
    <FlexWrapper direction="column" gap={12} align={"center"} justify={"center"}>
      <Typography color={"Text.placeholder"} type={"Bigger"}>OTL PLUS</Typography>
      <FlexWrapper direction="row" gap={12} justify={"space-between"}>
        <Typography color={"Text.placeholder"} type={"Big"}>만든 사람들</Typography>
        <Typography color={"Text.placeholder"} type={"Big"}>|</Typography>
        <Typography color={"Text.placeholder"} type={"Big"}>라이선스</Typography>
        <Typography color={"Text.placeholder"} type={"Big"}>|</Typography>
        <Typography color={"Text.placeholder"} type={"Big"}>개인정보취급방침</Typography>
      </FlexWrapper>
      <Typography color={"Text.placeholder"} type={"Big"}>otlplus@sparcs.org</Typography>
      <Typography color={"Text.placeholder"} type={"Big"}>Ⓒ 2016, SPARCS OTL TEAM</Typography>
    </FlexWrapper>
  );
}

export default Credit;