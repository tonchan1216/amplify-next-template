"use server";

import axios from "axios";
import * as cheerio from "cheerio";
import type { PropertyData } from "@/types/property";

export async function scrapeDataFromUrl(url: string) {
  try {
    const { data } = await axios.get(url); // 🔥 指定したURLからHTML取得
    const $ = cheerio.load(data);

    // データを取得
    const propertyData: PropertyData = {
      name: $('th:contains("物件名")').next('td').text().trim(),
      price: $('th:contains("価格")').next('td').find('p').first().text().trim(),
      layout: $('th:contains("間取り")').next('td').text().trim(),
      unitsForSale: $('th:contains("販売戸数")').next('td').text().trim(),
      totalUnits: $('th:contains("総戸数")').next('td').text().trim(),
      area: $('th:contains("専有面積")').next('td').text().trim(),
      balconyArea: $('th:contains("その他面積")').next('td').text().trim(),
      floor: $('th:contains("所在階")').next('td').text().trim(),
      structure: $('th:contains("構造・階建て")').next('td').text().trim(),
      completionDate: $('th:contains("完成時期（築年月）")').next('td').text().trim(),
      direction: $('th:contains("向き")').next('td').text().trim(),
      address: $('th:contains("住所")').next('td').find('p').first().text().trim(),
      transportation: []
    };

    // 交通情報を取得
    $('th:contains("交通")').next('td').find('div').each((i, el) => {
      propertyData.transportation.push($(el).text().trim());
    });

    return { propertyData };
  } catch (error) {
    console.error("スクレイピングエラー:", error);
    return null;
  }
}
