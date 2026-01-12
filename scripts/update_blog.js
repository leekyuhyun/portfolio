import { writeFileSync, mkdirSync, existsSync } from 'fs';
import Parser from 'rss-parser';

const parser = new Parser();

async function updateBlogData() {
  try {
    // Velog RSS 피드 가져오기
    const feed = await parser.parseURL('https://v2.velog.io/rss/@leekh010502');

    // 최신글 4개 추출
    const latestPosts = feed.items.slice(0, 4).map((post) => ({
      title: post.title,
      date: new Date(post.pubDate).toLocaleDateString('ko-KR'),
      url: post.link,
      summary: post.contentSnippet?.replace(/<[^>]*>?/gm, '').slice(0, 100) + '...',
    }));

    const content = `export const blogData = ${JSON.stringify(latestPosts, null, 2)};`;

    if (!existsSync('./src/data')) {
      mkdirSync('./src/data', { recursive: true });
    }

    writeFileSync('./src/data/blog_data.js', content);
    console.log('✅ 성공: src/data/blog_data.js 파일이 생성되었습니다!');
  } catch (error) {
    console.error('❌ 실패: 데이터를 가져오지 못했습니다.', error);
  }
}

updateBlogData();
