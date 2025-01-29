git push -u origin main/master:
The git push is used to push your local commits to the remote repository.
The -u -- sets the upstream reference of the branch. Meaning it links you local main branch to the remote main branch
so that you can use shorter commands like git push or git pull in the future without specifying the branch.
origin is the default name for your remote repository.
main -- is the name of the branch you are pushing to.
