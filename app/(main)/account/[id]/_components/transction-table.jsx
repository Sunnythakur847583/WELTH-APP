"use client";
import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { categoryColors } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Clock } from "lucide-react";

const RECURRING_INTERVALS = {
  DAILY: "Daily",
  WEEKLY: "Weekly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
};

const Transctiontable = ({ transctions }) => {
  const filteredAndSortedTransctions = transctions;
  const handleSort = () => {};
  return (
    <div className="space-y-4">
      {/*Filters */}

      {/*Transctions */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center">Date</div>
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("category")}
              >
                <div className="flex items-center">Category</div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center justify-end">Amount</div>
              </TableHead>
              <TableHead>Recurring</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedTransctions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center text-muted-foreground"
                >
                  No Transctions Found
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedTransctions.map((transction) => (
                <TableRow key={transction.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    {format(new Date(transction.date), "pp")}
                  </TableCell>
                  <TableCell>{transction.description}</TableCell>
                  <TableCell className="capitalize">
                    <span
                      style={{
                        backgroundColor: categoryColors[transction.category],
                      }}
                      className="px-2 py-1 rounded text-white text-sm"
                    >
                      {transction.category}
                    </span>
                  </TableCell>

                  <TableCell
                    className="text-right font-medium"
                    style={{
                      color: transction.type === "EXPENSE" ? "red" : "green",
                    }}
                  >
                    {transction.type === "EXPENSE" ? "+ " : "- "}$
                    {transction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {transction.recurring ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            {" "}
                            <Badge variant="outline" className="gap-1">
                              <Clock className="h-3 w-3" />
                              {
                                RECURRING_INTERVALS[
                                  transction.recurringInterval
                                ]
                              }
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Add to library</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <Badge variant="outline" className="gap-1">
                        <Clock className="h-3 w-3" />
                        One-time
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Transctiontable;
