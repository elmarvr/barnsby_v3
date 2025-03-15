import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "@nuxt/content";

const contentSchema = z.object({
  title: z.string(),
});

const serviceSchema = z.object({
  title: z.string(),
  icon: z.string(),
});

const featureSchema = z.object({
  title: z.string(),
  icon: z.string(),
});

const methodSchema = z.object({
  title: z.string(),
  body: z.any(),
});

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: "page",
      source: {
        include: "en/**/*.md",
        exclude: ["en/services/*.md", "en/method/*.md"],
        prefix: "/en",
      },
      schema: contentSchema,
    }),
    content_nl: defineCollection({
      type: "page",
      source: {
        include: "nl/**/*.md",
        exclude: ["nl/services/*.md", "nl/method/*.md"],
        prefix: "/nl",
      },
      schema: contentSchema,
    }),
    services_en: defineCollection({
      type: "data",
      source: {
        include: "en/services/*.json",
        prefix: "/en",
      },
      schema: serviceSchema,
    }),
    services_nl: defineCollection({
      type: "data",
      source: {
        include: "nl/services/*.json",
        prefix: "/nl",
      },
      schema: featureSchema,
    }),
    features_en: defineCollection({
      type: "data",
      source: {
        include: "en/features/*.json",
        prefix: "/en",
      },
      schema: featureSchema,
    }),
    features_nl: defineCollection({
      type: "data",
      source: {
        include: "nl/features/*.json",
        prefix: "/nl",
      },
      schema: serviceSchema,
    }),
    method_en: defineCollection({
      type: "data",
      source: {
        include: "en/method/*.md",
        prefix: "/en",
      },
      schema: methodSchema,
    }),

    contacts: defineCollection({
      type: "data",
      source: {
        include: "contacts/*.json",
      },
      schema: z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string(),
        address: z.string(),
      }),
    }),
  },
});
