"use server";

import axios from "axios";
import * as cheerio from "cheerio";
import type { PropertyData } from "@/types/property";

const cleanText = (text: string) => text.replace(/\s+/g, " ").trim();

export async function scrapeDataFromUrl(url: string) {
  try {
    const { data } = await axios.get(url); // 🔥 指定したURLからHTML取得
    const $ = cheerio.load(data);

    // データを取得
    const propertyData: PropertyData = {
      name: cleanText($('th:contains("物件名")').next('td').text()),
      price: cleanText($('th:contains("価格")').next('td').find('p').first().text()),
      layout: cleanText($('th:contains("間取り")').next('td').first().text()),
      unitsForSale: cleanText($('th:contains("販売戸数")').next('td').first().text()),
      totalUnits: cleanText($('th:contains("総戸数")').next('td').first().text()),
      area: cleanText($('th:contains("専有面積")').next('td').first().text()),
      balconyArea: cleanText($('th:contains("その他面積")').next('td').first().text()),
      floor: cleanText($('th:contains("所在階")').next('td').text()),
      structure: cleanText($('th:contains("構造・階建て")').next('td').text()),
      completionDate: cleanText($('th:contains("完成時期（築年月）")').next('td').text()),
      direction: cleanText($('th:contains("向き")').next('td').text()),
      address: cleanText($('th:contains("住所")').next('td').find('p').first().text()),
      transportation: [],
      feature: cleanText($('span.section_h2-header_title').closest('div').children('div').children('div').text()),
      pickup: cleanText($('h3:contains("特徴ピックアップ")').closest('div.mt30').children('div.mt10').text()).split("/")
    };

    // 交通情報を取得
    $('th:contains("交通")').next('td').find('div').each((i, el) => {
      name: cleanText($('th:contains("物件名")').next('td').text()),
      propertyData.transportation.push(($(el).text()));
    });

    return { propertyData };
  } catch (error) {
    console.error("スクレイピングエラー:", error);
    return null;
  }
}
