import { z } from "zod";
import { githubRequest, buildUrl, getRepositoryInfo } from "../common/utils.js";

const { GITHUB_REPOSITORY_URL, GITHUB_API_VERSION } = getRepositoryInfo();

export const ListCommitsSchema = z.object({
  owner: z.string(),
  repo: z.string(),
  sha: z.string().optional(),
  page: z.number().optional(),
  perPage: z.number().optional(),
});

export async function listCommits(
  owner: string,
  repo: string,
  page?: number,
  perPage?: number,
  sha?: string
) {
  return githubRequest(
    buildUrl(
      `${GITHUB_REPOSITORY_URL}${GITHUB_API_VERSION}/repos/${owner}/${repo}/commits`,
      {
        page: page?.toString(),
        per_page: perPage?.toString(),
        sha,
      }
    )
  );
}
