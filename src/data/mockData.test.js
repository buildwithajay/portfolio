import { describe, expect, it } from "vitest"
import {
  capabilities,
  experience,
  featuredWork,
  navigation,
  principles,
  profile,
  workDomains,
} from "./mockData"

describe("portfolio content", () => {
  it("provides the four public routes", () => {
    expect(navigation.map(({ to }) => to)).toEqual(["/", "/work", "/about", "/contact"])
  })

  it("leads the experience story with Ajay's current AEIRC Tech role", () => {
    expect(experience[0]).toMatchObject({
      company: "AEIRC Tech",
      role: "Software Developer",
      period: "Present",
    })
    expect(experience[0].work).toEqual(
      expect.arrayContaining(["Restaurant systems", "Government websites", "Billing systems"]),
    )
  })

  it("separates the public Victory Developers project from confidential client work", () => {
    expect(featuredWork).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: "Victory Developers", confidentiality: "Public" }),
        expect.objectContaining({ title: "Confidential client platform", confidentiality: "Private" }),
      ]),
    )
  })

  it("keeps public copy free of em dash characters", () => {
    const publicCopy = JSON.stringify({
      capabilities,
      experience,
      featuredWork,
      navigation,
      principles,
      profile,
      workDomains,
    })

    expect(publicCopy).not.toContain("—")
  })
})
