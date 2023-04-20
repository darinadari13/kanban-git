import { Octokit } from "octokit";

const octokit = new Octokit({ 
  auth: process.env.REACT_APP_NOT_SECRET_CODE,
});

export async function getIssues(owner: string, repo: string): Promise<any> {
  const res = await octokit.request("GET /repos/facebook/react/issues", {
    owner: 'facebook',
    repo: 'react',
  });

  return res.data
}




