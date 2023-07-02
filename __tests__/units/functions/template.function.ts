import { templateFunction } from "@/functions"
import { MockTemplateFunctionReturn } from "__mocks__/template.mock"

describe('template.function.ts', () => {
  describe('templateFunction', () => {
    it('should return \"template\" function', () => {
      expect(templateFunction()).toEqual(MockTemplateFunctionReturn)
    })
  })
})
