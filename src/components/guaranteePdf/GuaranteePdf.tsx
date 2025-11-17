import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./style";

type Props = {
  labels: {
    name: string;
    value: string;
  }[];
};

export const GuaranteePdf: React.FC<Props> = ({ labels }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="src/img/logo.png" />
          <View style={styles.titleSection}>
            <Text style={styles.title}>Taylor’s 40 Year Old Tawny Port</Text>
            <Text style={styles.title}>1980</Text>
            <Text style={styles.subTitle}>Тейлорс 40-річний Тоні Порт</Text>
            <Text style={styles.subTitle}>1980</Text>
          </View>
        </View>
        <View style={styles.mainContent}>
          <Image
            style={styles.image}
            src="https://i.postimg.cc/x86KNthN/Gemini-Generated-Image-1g6rbw1g6rbw1g6r.png"
          />
          <View style={styles.block}>
            {labels.map((item) => (
              <View style={styles.labels} key={item.name}>
                <Text style={styles.label}>{item.name.toUpperCase()}:</Text>
                <Text style={styles.item}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.descriptionSection}>
          <View style={styles.descriptionTitleBlock}>
          <View style={styles.line} />
          <Text>Опис</Text>
            <View style={styles.line} />
            </View>
          <Text style={styles.description}>
            Taylor’s 40 Year Old Tawny Port — це вино, яке втілює чотири
            десятиліття майстерності, терпіння та благородства. Створене з
            найкращих сортів винограду долини Дору в Португалії, воно
            витримується у дубових бочках протягом сорока років, завдяки чому
            набуває складного, багатошарового смаку. Це один із найвишуканіших
            виразів стилю tawny port, який демонструє глибину, елегантність і
            збалансованість, досяжну лише з часом.
            Аромат цього портвейну вражає
            розкішною палітрою — ноти волоського горіха, сухофруктів, інжиру,
            меду та карамелі плавно переплітаються з легкими відтінками
            апельсинової цедри й деревини. У смаку — оксамитова текстура,
            вражаюча гармонія між солодкістю та кислотністю, тривалий післясмак
            з тонами горіхів, ірису та спецій. кожен ковток — це подорож у часі,
            що відкриває глибину витриманого вина.
            Taylor’s 40 Year Old Tawny
            Port подають охолодженим у келихах для десертних вин, як самостійний
            дижестив або у парі з благородними сирами, горіхами та десертами на
            основі карамелі чи шоколаду. Це вино створене для особливих моментів
            і є символом справжньої винної досконалості, що відзначає
            витонченість і традицію португальського виноробства.
          </Text>
        </View>
      </Page>
    </Document>
  );
};
