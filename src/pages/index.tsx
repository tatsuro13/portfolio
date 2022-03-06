import { GetStaticProps } from "next";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";

import Posts from "../components/works/Posts";
import PageTemplate from "../components/layouts/PageTemplate";
import theme from "../components/utils/theme";

import { getLatestPosts } from "../lib/api";
import Introductions from "../components/home/Introductions";
import GreetingLottie from "../components/utils/DisplayLottie";
import code from "../../public/lottie/webdev.json";
import Link from "next/link";
import { FormatAlignCenter } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem",
  },
}));

interface Introduction {
  title: string;
  description: string;
  action: string;
  skillSet: boolean;
}

interface Post {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = await getLatestPosts(3); // トップページは最新の3件取得

  return {
    props: { latestPosts },
    revalidate: 1,
  };
};

const Home = ({ latestPosts }) => {
  const classes = useStyles();

  const introductions: Introduction[] = [
    {
      title: "About us",
      description:
        "前職（2021年4月末）はwebサイト制作の受託開発でディレクター（7割）とフロントエンドエンジニア（3割）兼務しておりました。WordPressや静的なWebサイトがメインとなります、一部React.jsなどで仮想DOM操作のコンテンツも実装。現職（2021年8月〜）はReact.jsとTypescript、Next.js・GraphQLを使用したwebアプリケーションの開発を行っております。キャッチアップは業務時間外でのものが多く実務ではフロントエンドエンジニアとしては未熟です。React.jsを使用するようなモダンなSPA開発はそれなりにできると思いますがが実務経験が乏しいのが現時点の要約になりますのでそれでもよければ。。という形となります。至らない点もありますが能動的なフットワークで技術のキャッチアップを行い仕事に活かしております。",
      action: "About us >",
      skillSet: false,
    },
    {
      title: "What I do",
      description:
        "現在UI/UXも含めたディレクションやwebサイトの制作経験からSPAの開発まで多岐に渡り対応しております（キャッチアップ含む）",
      action: "About Company >",
      skillSet: true,
    },
    {
      title: "Biography",
      description:
        "1980年生まれ。私立文系大学を卒業後服飾の専門学校でパターンメーキングの基礎を学び20代をパタンナーとして過ごす。その後30代からwebデザイナーに転身。前職をあわせて2社の受託webサイト制作会社にてPM兼デザイナー兼フロントエンドエンジニアとして従事。現在フロントエンドエンジニアとして深めるため求職活動中。フレームワークだったらreactが一番触ってる（vue.jsもAngularも触ったことはあります）",
      action: "About Recruit >",
      skillSet: false,
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="Sixth Project 13's Portfolio">
          <>
            <Container maxWidth="sm" className={classes.container}>
              <GreetingLottie animationData={code} />
            </Container>
            <Typography
              variant="h3"
              align="center"
              style={{ marginBottom: "2rem" }}
            >
              ［本サイトは Next.js(ISR,SWR) + react +
              headlessCMS（Works）で構成されています。］
            </Typography>
            {introductions.map((introduction, index) => (
              <Container
                key={index}
                maxWidth="lg"
                className={classes.container}
              >
                <Grid
                  container
                  justify={index % 2 == 0 ? "flex-start" : "flex-end"}
                >
                  <Grid item lg={6} md={6}>
                    <Introductions
                      index={index}
                      title={introduction.title}
                      description={introduction.description}
                      action={introduction.action}
                      skillSet={introduction.skillSet}
                    />
                  </Grid>
                </Grid>
              </Container>
            ))}
            <Container maxWidth="lg" className={classes.container}>
              <Typography
                variant="h1"
                align="center"
                style={{ marginBottom: "2rem" }}
              >
                Latest Works
              </Typography>
              <Grid container spacing={4}>
                {latestPosts?.map((post: Post) => (
                  <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <Grid container>
                      <Posts
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        thumbnail={post.thumbnail.url}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Link href="/works/page/1">
                <Button
                  style={{
                    marginTop: "3rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                  }}
                  variant="contained"
                  color="primary"
                >
                  Works See More
                </Button>
              </Link>
            </Container>
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  );
};

export default Home;
